import * as cookie from 'cookie'
import { useEffect, useState } from 'react'
import Appointment from '../../components/appointment';
import CreateAppointment from '../../components/create-apt'

const UserProfile = ({username, apt}) => {
    const [apts, setApts] = useState();
    useEffect(() => {
        if(apt) {
            const parsed = JSON.parse(apt);
            setApts(parsed)
        } else {
            setApts([])
        }
    }, [apt])
    return (
        <section className="section">
    <div className="container.is-widescreen">
        <div className="columns">
            <div className="column is-one-quarter">
                <div className="card">
                    <div className="card-content">
                        <div className="columns">
                            <div className="column  is-2 has-text-weight-bold">
                                <figure className="image is-48x48">
                                    <img src="http://placeimg.com/48/48/arch"></img>
                                </figure>
                            </div>
                            <div className="column is-size-4 p-2">
                                <p>JohnDoe</p>
                                <p className="is-size-7">The Example Company</p>
                            </div>
                            <div className="column is-size-3 has-text-right">
                                <button className="button is-link is-outlined">
                                    <span className="icon is-medium">
                                        <ion-icon size="large" name="cog-outline"></ion-icon>
                                    </span>
                                  </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns p-0">
                    <div className="column">
                            <CreateAppointment username={username}/>
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-content">
                        <div className="columns" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.377)'}}>
                            <div className="column">
                                <button className="button is-small is-primary is-outlined"><ion-icon className="mr-1" name="shield-half-outline"></ion-icon>Creator</button>
                            </div>
                            <div className="column has-text-right">
                                <span className="tag">8 appointments today</span>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <p className="is-size-6 has-text-weight-medium">Today's Outlook</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ml-1 icon-text">
                                <span className="icon is-size-5 mr-3"><ion-icon name="calendar-outline"></ion-icon></span>
                                <span className="has-text-weight-bold is-size-6">Appointments Today: </span>
                                <span className="is-size-6 ml-4">8 (3 with <span className="is-italic is-underlined has-text-info"> notes</span>)</span>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ml-1 icon-text">
                                <span className="icon is-size-5 mr-3 has-text-success"><ion-icon name="stats-chart-outline"></ion-icon></span>
                                <span className="has-text-weight-bold is-size-6">Projected Revenue: </span>
                                <span className="is-size-6 ml-4"> $185.26</span>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <p className="is-size-6 has-text-weight-medium">Last Week</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ml-1 icon-text">
                                <span className="icon is-size-5 mr-3"><ion-icon name="calendar-outline"></ion-icon></span>
                                <span className="has-text-weight-bold is-size-6">Appointments completed:</span>
                                <span className="is-size-6 ml-4">36 </span>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ml-1 icon-text">
                                <span className="icon is-size-5 mr-3 has-text-success"><ion-icon name="cash-outline"></ion-icon></span>
                                <span className="has-text-weight-bold is-size-6">Realized Gain: </span>
                                <span className="is-size-6 ml-4"> $2307.65</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-three-quarters">
            <div class="columns">
                    <div class="column">
                        <div class="box is-shadowless has-background-success-light p-1">
                            <div class="columns is-rounded m-1">
                                <div class="column">
                                    <div class="columns">
                                        <div class="column is-three-quarters">
                                            <span class="is-size-3">Appointments</span>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label is-size-7">Sort By</label>
                                                <div class="control">
                                                    <div class="select is-small is-rounded">
                                                        <select>
                                                            <option>Normal</option>
                                                            <option>Creator</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label is-size-7">Sort By Type</label>
                                                <div class="control">
                                                    <div class="select is-small is-rounded">
                                                        <select>
                                                            <option>Normal</option>
                                                            <option>Creator</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label is-size-7">Show</label>
                                                <div class="control">
                                                    <div class="select is-small is-rounded">
                                                        <select>
                                                            <option>Normal</option>
                                                            <option>Creator</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns mt-3">
                    <div className="column">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-header-title">
                                    <div className="icon-text">
                                        <span className='icon'><ion-icon name="alert-outline" className="is-size-4 has-text-danger"></ion-icon></span>
                                        <span>Haircut - Today, 3:30</span>
                                    </div>
                                </div>
                                <div className="card-header-icon">
                                    <div className="has-text-right">
                                        <span className="tag is-success is-light is-medium"><ion-icon className='mr-1 is-size-5' name="stopwatch-outline"></ion-icon>30 min</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="columns">
                                    <div className="column is-narrow icon-text">
                                        <span className='icon'>
                                            <ion-icon name="time-outline" className=" is-size-4 mr-2 has-text-success"></ion-icon>
                                        </span>
                                        <span className="has-text-weight-bold mr-2">Times:</span>
                                        <span>Today, 3:30 to 4:00</span>
                                    </div>
                                    <div className="column is-narrow icon-text">
                                        <span className="icon is-size-4 mr-3 has-text-success"><ion-icon name="cash-outline"></ion-icon></span>
                                        <span className="has-text-weight-bold mr-2">Price:</span>
                                        <span>$31.25</span>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-narrow icon-text">
                                        <span className="icon is-size-4 mr-3 has-text-success"><ion-icon name="person-outline"></ion-icon></span>
                                        <span className="has-text-weight-bold mr-2">Claimed by:</span>
                                        <span>exampleUser123 <button className="button is-small ml-3 is-rounded">Message</button></span>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column has-text-right p-0">
                                        <button className="button is-small is-danger is-rounded">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
    )
}

const verify = require('../../auth/helpers')
const model = require('../../orm/index')

export async function getServerSideProps(context) {
    const cook = context.req.headers.cookie;
    const parsed = cookie.parse(cook)
    var authen = await verify.verifyJWT(parsed.token, context.params.creator)
    if(authen.auth && authen.act === 'admin') {
        const apts = await model.Appointments.findAll({ 
            where: { 
                adminID: authen.id 
            }, 
                attributes: [
                    'adminID', 
                    'userID', 
                    'userEmail',
                    'startTime', 
                    'endTime'
                ] 
            })
        if (apts) {
            return {
                props: {
                    username: authen.username,
                    apt: JSON.stringify(apts)
                }
            }
        } else {
            return {
                props: {
                    username: authen.username
                }
            }
        }
    } else {
        return {
            redirect: {
                destination: '/asd',
                permanent: false
            }
        }
    }
}




export default UserProfile;