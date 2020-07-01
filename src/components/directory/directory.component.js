import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super();
        this.state = {
            sections: [
                    {
                      title: 'hats',
                      imageUrl: 'https://images.unsplash.com/photo-1452547813764-66d7616f3f2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
                      id: 1,
                      linkUrl: 'shop/hats'
                    },
                    {
                      title: 'jackets',
                      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
                      id: 2,
                      linkUrl: 'shop/jackets'
                    },
                    {
                      title: 'sneakers',
                      imageUrl: 'https://images.unsplash.com/photo-1515762909411-f9aea3cb6969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
                      id: 3,
                      linkUrl: 'shop/sneakers'
                    },
                    {
                      title: 'womens',
                      imageUrl: 'https://images.unsplash.com/photo-1565720473953-e202c24dbbb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80',
                      size: 'large',
                      id: 4,
                      linkUrl: 'shop/womens'
                    },
                    {
                      title: 'mens',
                      imageUrl: 'https://images.unsplash.com/photo-1583877019925-1acc8293e43a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
                      size: 'large',
                      id: 5,
                      linkUrl: 'shop/mens'
                    }
                  ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
            {this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
            </div>
        )
    }
}

export default Directory;