import honey from '../images/bomb3.png'
import milky from '../images/bomb6.jpg'
import rose from '../images/bomb5.png'
import sunday from '../images/bomb4.jpg'

const PRODUCTS_LIST = [
        {
        id: 1,
        name: `It's the Beez Kneez`,
        group: `Milk`,
        price: 9.99,
        description: 'Milk and Honey bath bomb',
        isActive: true,
        image: honey,
    },
    {
        id: 2,
        group: `Milk`,
        name: 'MMMilky Way',
        price: 10.99,
        description: 'blah blah blah',
        isActive: true,
        image: milky
    },
    {
        id: 3,
        group: `Boozy Brunch`,
        name: 'Rose All Day',
        price: 10.99,
        description: 'blah blah blah',
        isActive: true,
        image: rose
    },
    {
        id: 4,
        group: `Sweet like Candy`,
        name: 'Sunday Candy',
        price: 10.99,
        description: 'blah blah blah',
        isActive: true,
        image: sunday
    }
]

export default PRODUCTS_LIST