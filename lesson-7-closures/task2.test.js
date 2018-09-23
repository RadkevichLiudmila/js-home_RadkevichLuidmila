var interviewQuestion = require('./task2');

describe('File test1.js', () => {
  it('Function return guestion for John teacher', () => {
    expect(interviewQuestion('teacher')('John')).toBe('What subject do you teach John?');
  });
  it('Function return guestion for John designer', () => {
    expect(interviewQuestion('designer')('John')).toBe('John can you please explain what UX design is?');
  });
  it('Function return guestion for John other profession', () => {
    expect(interviewQuestion('other')('John')).toBe('Hello John, what do you do?');
  });
  it('Function return guestion for Anna designer', () => {
    expect(interviewQuestion('designer')('Anna')).toBe('Anna can you please explain what UX design is?');
  });
  it('Function return guestion for Ylia lawyer', () => {
    expect(interviewQuestion('lawyer')('Ylia')).toBe('Hello Ylia, what do you do?');
  });
  it('Function return guestion for Mark programmer', () => {
    expect(interviewQuestion('programmer')('Mark')).toBe('Hello Mark, what do you do?');
  });
});