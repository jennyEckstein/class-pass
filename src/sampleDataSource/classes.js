const classes = [
  {
    id: '1',
    name: 'Pilates',
    location: 'Chelsea',
  },
  {
    id: '2',
    name: 'Barre',
    location: 'SoHo',
  },
  {
    id: '3',
    name: 'Pilates',
    location: 'Harlem',
  },
  {
    id: '4',
    name: 'Spin',
    location: 'Chelsea',
  },
  {
    id: '5',
    name: 'Barry\'s Bootcamp',
    location: 'East Village',
  },
];


function getClassById(id) {
  return classes.reduce((arr, workout) => {
    if (workout.id === id) {
      arr.push(workout);
    }
    return arr;
  }, []);
}

module.exports = {
  getClassById,
};

