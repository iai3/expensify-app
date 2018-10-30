import moment from 'moment';

export default [{
    id: '1',
    description: 'Coffee',
    note: '',
    amount: 4000,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 140000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 6500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];