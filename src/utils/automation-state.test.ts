import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TAMAM_SOLUTIONS,
  PAIN_POINTS,
  WORKFLOW_STEPS,
  TAMAM_PACKAGES,
  getAutomationImpact,
  validateInquiryForm,
} from './automation-state';

test('TAMAM_SOLUTIONS includes the 4 confirmed solutions without hallucinated pricing or clients', () => {
  assert.equal(TAMAM_SOLUTIONS.length, 4);
  const ids = TAMAM_SOLUTIONS.map(s => s.id);
  assert.ok(ids.includes('customer-support'));
  assert.ok(ids.includes('lead-followup'));
  assert.ok(ids.includes('appointment-reminders'));
  assert.ok(ids.includes('custom-agent'));
});

test('TAMAM_PACKAGES includes the 3 exact package offerings', () => {
  assert.equal(TAMAM_PACKAGES.length, 3);
  assert.equal(TAMAM_PACKAGES[0].name, 'CRM واستقبال الاستفسارات');
  assert.equal(TAMAM_PACKAGES[1].name, 'مواعيد وعروض واتساب');
  assert.equal(TAMAM_PACKAGES[2].name, 'أتمتة مخصّصة');
  assert.equal(TAMAM_PACKAGES[0].ctaLabel, 'ناقش احتياج شركتك');
  assert.equal(TAMAM_PACKAGES[1].ctaLabel, 'ناقش احتياج شركتك');
  assert.equal(TAMAM_PACKAGES[2].ctaLabel, 'احكيلنا شو بدك تأتمت');
});

test('PAIN_POINTS contains the 3 exact requested cards', () => {
  assert.equal(PAIN_POINTS.length, 3);
  assert.equal(PAIN_POINTS[0].title, 'رسائل بلا توقف');
  assert.equal(PAIN_POINTS[1].title, 'متابعة بتفلت');
  assert.equal(PAIN_POINTS[2].title, 'مهام تتكرر');
});

test('WORKFLOW_STEPS contains the 3 exact requested steps', () => {
  assert.equal(WORKFLOW_STEPS.length, 3);
  assert.equal(WORKFLOW_STEPS[0].stepNumber, '01');
  assert.equal(WORKFLOW_STEPS[0].title, 'نفهم طريقة شغلك');
  assert.equal(WORKFLOW_STEPS[1].stepNumber, '02');
  assert.equal(WORKFLOW_STEPS[1].title, 'نبني سير العمل المناسب');
  assert.equal(WORKFLOW_STEPS[2].stepNumber, '03');
  assert.equal(WORKFLOW_STEPS[2].title, 'نجرّبه ونضبطه');
});

test('getAutomationImpact returns distinct metrics for manual vs automated states', () => {
  const manual = getAutomationImpact(false);
  assert.equal(manual.isAutomated, false);
  assert.equal(manual.hoursSavedWeekly, 0);

  const automated = getAutomationImpact(true);
  assert.equal(automated.isAutomated, true);
  assert.ok(automated.hoursSavedWeekly > 20);
  assert.ok(automated.routineTaskReduction > 50);
});

test('validateInquiryForm checks required fields correctly', () => {
  const invalid = validateInquiryForm({});
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.businessName);
  assert.ok(invalid.errors.contact);

  const valid = validateInquiryForm({
    name: 'أحمد السعد',
    businessName: 'شركة الأفق للاستشارات',
    contact: 'contact@alofooq.sa',
    notes: 'نحتاج أتمتة الردود على الواتساب وجدولة المواعيد',
    selectedSolutions: ['customer-support', 'appointment-reminders'],
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
