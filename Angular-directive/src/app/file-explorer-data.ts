export interface FileExplorerItem {
  name: string;
  id: number;
  isFolder: boolean;
  isExpanded?: boolean;
  isModified?: boolean;
  children: FileExplorerItem[];
}

export const FILE_EXPLORER_DATA: FileExplorerItem = {
  name: 'Root',
  id: 1,
  isFolder: true,
  isExpanded: false,
  isModified: false,
  children: [
    {
      name: 'Documents',
      id: 2,
      isFolder: true,
      isExpanded: false,
      isModified: false,
      children: [
        {
          name: 'Work',
          id: 3,
          isFolder: true,
          isExpanded: false,
          isModified: false,
          children: [
            {
              name: 'Project1.docx',
              id: 4,
              isFolder: false,
              isModified: false,
              children: [],
            },
            {
              name: 'Project2.xlsx',
              id: 5,
              isFolder: false,
              isModified: false,
              children: [],
            },
          ],
        },
        {
          name: 'Personal',
          id: 6,
          isFolder: true,
          isExpanded: false,
          isModified: false,
          children: [
            {
              name: 'Resume.pdf',
              id: 7,
              isFolder: false,
              isModified: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Pictures',
      id: 8,
      isFolder: true,
      isExpanded: false,
      isModified: false,
      children: [
        {
          name: 'Vacation',
          id: 9,
          isFolder: true,
          isExpanded: false,
          isModified: false,
          children: [
            {
              name: 'Beach.jpg',
              id: 10,
              isFolder: false,
              isModified: false,
              children: [],
            },
            {
              name: 'Mountain.png',
              id: 11,
              isFolder: false,
              isModified: false,
              children: [],
            },
          ],
        },
        {
          name: 'Profile.jpg',
          id: 12,
          isFolder: false,
          isModified: false,
          children: [],
        },
      ],
    },
    {
      name: 'README.txt',
      id: 17,
      isFolder: false,
      isModified: false,
      children: [],
    },
  ],
};
