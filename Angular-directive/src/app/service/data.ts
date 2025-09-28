export type Item = {
    id: number;
    name: string;
    children: Item[];
  };
  
 export const data: Item[] = [
    {
      id: 1,
      name: 'cloths',
      children: [
        {
          id: 2,
          name: 't-shirt',
          children: [
            { id: 3, name: 'cotton t-shirt', children: [] },
            { id: 4, name: 'polyester t-shirt', children: [] }
          ]
        },
        {
          id: 5,
          name: 'shirt',
          children: [
            {
              id: 6,
              name: 'formal shirt',
              children: [
                { id: 7, name: 'slim fit', children: [] },
                { id: 8, name: 'regular fit', children: [] }
              ]
            },
            { id: 9, name: 'casual shirt', children: [] }
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'electronics',
      children: [
        {
          id: 11,
          name: 'laptop',
          children: [
            { id: 12, name: 'gaming laptop', children: [] },
            { id: 13, name: 'ultrabook', children: [] }
          ]
        },
        {
          id: 14,
          name: 'mobile',
          children: [
            {
              id: 15,
              name: 'android',
              children: [
                { id: 16, name: 'Samsung', children: [] },
                { id: 17, name: 'OnePlus', children: [] }
              ]
            },
            {
              id: 18,
              name: 'iOS',
              children: [
                { id: 19, name: 'iPhone 13', children: [] },
                { id: 20, name: 'iPhone 14', children: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 21,
      name: 'furniture',
      children: [
        {
          id: 22,
          name: 'chair',
          children: [
            { id: 23, name: 'office chair', children: [] },
            { id: 24, name: 'dining chair', children: [] }
          ]
        },
        {
          id: 25,
          name: 'table',
          children: [
            { id: 26, name: 'coffee table', children: [] },
            {
              id: 27,
              name: 'study table',
              children: [
                { id: 28, name: 'wooden', children: [] },
                { id: 29, name: 'metal', children: [] }
              ]
            }
          ]
        }
      ]
    }
  ];
  