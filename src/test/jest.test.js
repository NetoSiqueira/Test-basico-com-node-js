test('Devo conhecer as principais assertivas do jest', () =>{
    let number = null;
    expect(number).toBeNull();
});

test('Devo saber trabalhar com objetos', () =>{
    const obj = {name: 'Jhon', mail:'john@mail.com'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Jhon');
    expect(obj.name).toBe('Jhon');

    const obj2 = {name: 'Jhon', mail:'john@mail.com'};
    expect(obj).toEqual(obj2);
});