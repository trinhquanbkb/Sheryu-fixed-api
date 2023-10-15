interface Records {
  id: number;
  status: string;
  code: string;
  numberBin: number;
  numberTracking: number;
  weight: string;
  price: string;
}

interface ExpandableRecords {
  id: number;
  status: string;
  code: string;
  numberBin: number;
  numberTracking: number;
  weight: string;
  price: string;
  subRows: Records[];
}

const records: Records[] = [
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
  },
];

const expandableRecords: ExpandableRecords[] = [
  {
    id: 1,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 2,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 3,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 4,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 5,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 6,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 7,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 8,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 9,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 10,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 11,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 12,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 13,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 14,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 15,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 16,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 17,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 18,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
  {
    id: 19,
    status: "Đang vận chuyển về vn",
    code: "DP112 / HN-DP-01",
    numberBin: 3,
    numberTracking: 5,
    weight: "0.00 / 0.00",
    price: "125.000đ",
    subRows: [
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
      {
        id: 1,
        status: "Đang vận chuyển về vn",
        code: "DP112 / HN-DP-01",
        numberBin: 3,
        numberTracking: 5,
        weight: "0.00 / 0.00",
        price: "125.000đ",
      },
    ],
  },
];
export { records, expandableRecords };
