import delay from './delay';

export default {
  friends() {
    return delay(1500)
      .then(() => {
        let friends = [];
        const names = ['John Doe', 'Jimmy Santos'];

        for ( let i = 0; i < 20; i++ ) {
          friends.push({
            name: names[i % 2],
            age: Math.floor((Math.random() * 30 + 20))
          });
        }

        return friends;
      });
  }
}