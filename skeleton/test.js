const {
    add_todo,
    todo_lest,
    generateId,
    delete_todo,
    find_todo,
    change_done
    } = require('./logic.js');
  
  
  //first test if spread working
  test('add_todo() should return lest + the new obj.', function () {
   let actual = add_todo(todo_lest,{
      id: 0,
      description: 'smash avocados',
      done: true,   
  });
  let expected = [...todo_lest,
    { id: 0,
    description: 'smash avocados',
    done: true,}];
    expect(actual).toEqual(expected);
    });
  
  
  // second test if its same array
  test('add_todo() should return lest + the new obj.', function () {
    let actual = add_todo(todo_lest,{
       id: 0,
       description: 'smash avocados',
       done: true,   
   });
   let expected = [todo_lest,
     { id: 0,
     description: 'smash avocados',
     done: true,}];
     expect(actual).not.toEqual(expected);
     });
  
  
  // third one is for next id is working or what
     test('generateId() should return last id + 1.', function () {
      let actual = generateId(todo_lest);   
     let expected = 1
       expect(actual).toBe(expected);
       });
  
  
   /// delete element test
      test('delete_todo() should return list without obj have id (0)', function () {
         let actual = delete_todo(todo_lest,0);   
         let expected = []
         expect(actual).toEqual(expected);
         expect(delete_todo([{id:1},{id:2},{id:3},{id:4}],4)).toEqual([{id:1},{id:2},{id:3}]);
         expect(delete_todo([{id:1},{id:2},{id:3},{id:4}],4)).not.toEqual([{id:1},{id:2},{id:3},{id:4}]);
         expect(delete_todo([{id:1},{id:2},{id:3},{id:4}],4)).not.toBe([{id:1},{id:2},{id:3}]);
         });
  
       // this test for find object and return it by id 
        test('find-todo() should return object have this id',function(){
        let actual=find_todo(todo_lest,0);
        let expected={
          id: 0, 
          description: "make tea", 
          done: false, 
        };
          expect(actual).toEqual(expected);
          expect(actual).not.toEqual(todo_lest);
        })
  
        //test done
        test('change_done() should return done true',function(){
          let actual=change_done(todo_lest,0);
          let expected=[{
            id: 0, 
            description: "make tea", 
            done: true, 
          }];
            expect(actual).toEqual(expected);
          })