import React from 'react'
import css from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../../assets/images/user_photo_not_found.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setState(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    getPagesCount = () => {
        return Math.ceil(this.props.totalCount / this.props.pageSize);
    }

    getPages = (count) => {
        let result = [];
        for (let i = 1; i <= count; i++) {
            result.push(i);
        }
        return result;
    }

    pageClick = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setState(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    render() {
        return <div className={css.users_block}>
            <h2>Users ({this.props.usersPage.users.length})</h2>
            {
                this.props.usersPage.users.map(u => <div>
                    <div className={css.user}>
                        <div className={css.user_action_part}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                            <div>
                                {
                                    u.followed ?
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={css.user_info_part}>
                            <div className={css.user_location_block}>
                                <div className={css.user_city}>
                                    {'u.location.city'}
                                </div>
                                <div className={css.user_country}>
                                    {'u.location.country'}
                                </div>
                            </div>
                            <div className={css.user_name_block}>
                                {u.name}
                            </div>
                            <div className={css.user_status_block}>
                                {u.status ? u.status : 'No status'}
                            </div>

                        </div>
                    </div>
                </div>)
            }
            <div className={css.pagination_block}>
                {
                    this.getPages(this.getPagesCount()).map(p => {
                        return <div
                            className={`${css.page_block} ${p === this.props.currentPage && css.current_page}`}
                            onClick={() => {
                                this.pageClick(p)
                            }}
                        >{p}
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default Users;