export default class firebase {
  auth () {
    return {
      signUp: () => ({
        email: 'dog@gmail.com',
        uid: 24
      })
    };
  }
}

// export const signUp = jest.fn().mockImplementation(()=> Promise.resolve({
//   status: 200,
//   json: () => Promise.resolve({
//     email: 'dog@gmail.com', uid: 24
//   })
// }));

