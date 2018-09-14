const considersMax = require('./task1');
describe('Test for task 1', () => {
  it('Max 99', () => {
    var tasksCompleted = {'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99 };
    expect(considersMax(tasksCompleted)).toEqual('Anton');
  });
  it('Max 200', () => {
    var tasksCompleted = {'Anna': 200, 'Serg': 35, 'Elena': 1, 'Anton': 99 };
    expect(considersMax(tasksCompleted)).toEqual('Anna');
  });
  it('Max 5', () => {
    var tasksCompleted = {'Anna': 0, 'Serg': 5, 'Elena': 5, 'Anton': 4 };
    expect(considersMax(tasksCompleted)).toEqual('Serg, Elena');
  });
  it('Max 0', () => {
    var tasksCompleted = {'Anna': 0, 'Serg': 0};
    expect(considersMax(tasksCompleted)).toEqual('No max');
  });
});