const levels = [
  {
    targets: [3, 9, 14, 7],
    nums: ['/4', '+2', '-7'],
    limit: 11,
    solution: ['+2', '+2', '+2', '+2', '+2', '+2', '+2', '+2', '+2', '-7', '-7']
  },
  {
    targets: [3, 4, 12, 13],
    nums: ['+9', '+4', '-4'],
    limit: 8,
    solution: ['+9', '-4', '-4', '+4', '+4', '+9', '-4', '-4']
  },
  {
    targets: [1, 2, 5, 2],
    nums: ['+7', '+1', '-9'],
    limit: 9,
    solution: ['+1', '+1', '+1', '+1', '+7', '+7', '+1', '-9', '-9']
  },
  {
    targets: [3, 10, 14, 13],
    nums: ['+4', '+5', '-9'],
    limit: 9,
    solution: ['+4', '+4', '+4', '+4', '-9', '+4', '+4', '+4', '-9']
  },
  {
    targets: [3, 11, 7, 13],
    nums: ['/4', '-8', '+6'],
    limit: 11,
    solution: ['-8', '-8', '+6', '+6', '+6', '+6', '-8', '-8', '+6', '+6', '+6']
  },
  {
    targets: [3, 4, 3, 5],
    nums: ['*3', '-3', '+1'],
    limit: 5,
    solution: ['+1', '-3', '*3', '+1', '+1']
  },
  {
    targets: [2, 15, 13, 15],
    nums: ['*5', '-1', '+1'],
    limit: 6,
    solution: ['+1', '*5', '-1', '-1', '+1', '+1']
  },
  {
    targets: [1, 4, 11, 10],
    nums: ['+1', '+3', '-5'],
    limit: 7,
    solution: ['+3', '+1', '+3', '+3', '+1', '+3', '-5']
  },
  {
    targets: [3, 14, 13, 3],
    nums: ['*7', '-5', '+7'],
    limit: 12,
    solution: ['-5', '-5', '+7', '+7', '+7', '-5', '-5', '-5', '+7', '+7', '-5', '-5']
  },
  {
    targets: [3, 8, 6, 12],
    nums: ['+7', '*6', '-8'],
    limit: 12,
    solution: ['+7', '+7', '+7', '-8', '-8', '+7', '+7', '-8', '-8', '+7', '+7', '-8']
  },
  {
    targets: [1, 6, 9, 4],
    nums: ['+3', '/2', '-4'],
    limit: 8,
    solution: ['+3', '+3', '+3', '-4', '+3', '+3', '-4', '/2']
  },
  {
    targets: [2, 13, 12, 7],
    nums: ['*6', '-2', '+1'],
    limit: 8,
    solution: ['*6', '+1', '-2', '+1', '-2', '-2', '-2', '+1']
  },
  {
    targets: [3, 10, 12, 6],
    nums: ['*6', '-2', '+4'],
    limit: 8,
    solution: ['-2', '*6', '+4', '-2', '+4', '-2', '-2', '-2']
  },
  {
    targets: [2, 14, 3, 4],
    nums: ['*6', '+1', '-9'],
    limit: 9,
    solution: ['*6', '+1', '+1', '-9', '*6', '-9', '-9', '-9', '+1']
  },
  {
    targets: [1, 10, 6, 4],
    nums: ['+8', '-7', '+2'],
    limit: 12,
    solution: ['+8', '+8', '-7', '+8', '-7', '-7', '+2', '+8', '-7', '-7', '+2', '+2']
  },
  {
    targets: [1, 13, 1, 13],
    nums: ['+9', '-2', '*2'],
    limit: 12,
    solution: ['*2', '*2', '+9', '-2', '-2', '-2', '-2', '-2', '-2', '*2', '*2', '+9']
  },
  {
    targets: [2, 15, 1, 14],
    nums: ['/8', '+5', '-7'],
    limit: 12,
    solution: ['+5', '+5', '+5', '+5', '-7', '-7', '/8', '+5', '+5', '+5', '+5', '-7']
  },
  {
    targets: [2, 1, 6, 9],
    nums: ['/2', '+3', '+7'],
    limit: 7,
    solution: ['/2', '+3', '/2', '+3', '+7', '/2', '+3']
  },
  {
    targets: [2, 9, 13, 2],
    nums: ['+2', '*2', '-3'],
    limit: 11,
    solution: ['+2', '+2', '*2', '-3', '+2', '+2', '-3', '-3', '-3', '-3', '*2']
  },
  {
    targets: [1, 3, 6, 9],
    nums: ['/2', '-2', '+7'],
    limit: 9,
    solution: ['-2', '+7', '/2', '-2', '-2', '+7', '-2', '/2', '+7']
  },
  {
    targets: [1, 7, 12, 7],
    nums: ['-1', '*8', '-9'],
    limit: 12,
    solution: ['*8', '-1', '-1', '*8', '-9', '-9', '-9', '-9', '-1', '-9', '*8', '-9']
  },
  {
    targets: [2, 15, 4, 1],
    nums: ['/7', '-2', '+5'],
    limit: 12,
    solution: ['-2', '+5', '+5', '+5', '-2', '+5', '+5', '+5', '/7', '-2', '+5', '/7']
  },
  {
    targets: [2, 13, 15, 14],
    nums: ['-6', '-5', '*3'],
    limit: 11,
    solution: ['*3', '*3', '-5', '-6', '*3', '-6', '-5', '*3', '-6', '-5', '-5']
  },
  {
    targets: [3, 4, 11, 5],
    nums: ['+4', '*3', '-7'],
    limit: 11,
    solution: ['+4', '+4', '-7', '+4', '-7', '*3', '+4', '+4', '-7', '*3', '-7']
  },
  {
    targets: [2, 14, 7, 3],
    nums: ['/2', '+8', '-7'],
    limit: 12,
    solution: ['+8', '/2', '+8', '+8', '-7', '/2', '+8', '-7', '/2', '/2', '+8', '-7']
  },
  {
    targets: [2, 15, 10, 9],
    nums: ['/3', '+9', '+8'],
    limit: 12,
    solution: ['+8', '+8', '/3', '+9', '/3', '+9', '+8', '+8', '/3', '+9', '+8', '/3']
  },
  {
    targets: [1, 2, 11, 9],
    nums: ['-8', '*5', '+1'],
    limit: 8,
    solution: ['+1', '*5', '+1', '-8', '*5', '-8', '+1', '+1']
  },
  {
    targets: [2, 10, 2, 4],
    nums: ['+5', '/3', '+3'],
    limit: 9,
    solution: ['+5', '+3', '+5', '+3', '/3', '/3', '+5', '+5', '/3']
  },
  {
    targets: [1, 11, 8, 1],
    nums: ['*5', '+3', '-9'],
    limit: 10,
    solution: ['*5', '+3', '+3', '+3', '+3', '-9', '+3', '-9', '*5', '-9']
  },
  {
    targets: [2, 1, 15, 4],
    nums: ['*8', '+4', '-5'],
    limit: 11,
    solution: ['+4', '-5', '*8', '+4', '+4', '+4', '-5', '+4', '-5', '-5', '-5']
  },
  {
    targets: [2, 5, 7, 11],
    nums: ['+4', '+5', 'sqrt'],
    limit: 10,
    solution: ['+4', '+4', '+5', '+5', '+5', 'sqrt(25)', '+4', 'sqrt(9)', '+4', '+4']
  },
  {
    targets: [3, 10, 8, 7],
    nums: ['/2', '+3', '+8'],
    limit: 8,
    solution: ['+3', '+8', '/2', '+3', '/2', '+3', '/2', '+3']
  },
  {
    targets: [1, 3, 1, 10],
    nums: ['*2', '-1', '-2'],
    limit: 10,
    solution: ['*2', '*2', '-1', '-2', '*2', '*2', '*2', '-1', '-2', '*2']
  },
  {
    targets: [1, 7, 9, 3],
    nums: ['sqrt', '+8', '-3'],
    limit: 11,
    solution: ['+8', '+8', '+8', 'sqrt(25)', '+8', '-3', '-3', '+8', '-3', '-3', 'sqrt(9)']
  },
  {
    targets: [1, 3, 13, 4],
    nums: ['-7', '+3', '*2'],
    limit: 13,
    solution: ['-7', '+3', '+3', '+3', '+3', '*2', '-7', '*2', '+3', '-7', '-7', '+3', '*2']
  },
  {
    targets: [1, 3, 7, 10],
    nums: ['sqrt', '+9', '-1'],
    limit: 14,
    solution: ['+9', '-1', 'sqrt(9)', '+9', '-1', '-1', '-1', '-1', '-1', '+9', 'sqrt(16)', 'sqrt(4)', '+9', '-1']
  },
  
  
];

export default levels;
