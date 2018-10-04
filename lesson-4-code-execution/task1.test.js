const considersMax = require('./task1');
describe('Test for task 1', () => {
  it('Max Anton - 99', () => {
    var tasksCompleted = {'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99 };
    expect(considersMax(tasksCompleted)).toEqual('Anton');
  });
  it('Max Anna 200', () => {
    var tasksCompleted = {'Anna': 200, 'Serg': 35, 'Elena': 1, 'Anton': 99 };
    expect(considersMax(tasksCompleted)).toEqual('Anna');
  });
  it('No max, because 2 identical values', () => {
    var tasksCompleted = {'Anna': 0, 'Serg': 5, 'Elena': 5, 'Anton': 4 };
    expect(considersMax(tasksCompleted)).toEqual('No max');
  });
  it('No max, because all identical values', () => {
    var tasksCompleted = {'Anna': 7, 'Serg': 7, 'Elena': 7, 'Anton': 7};
    expect(considersMax(tasksCompleted)).toEqual('No max');
  });
});