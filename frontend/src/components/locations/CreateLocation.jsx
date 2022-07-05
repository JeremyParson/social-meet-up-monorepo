import { useState } from 'react'

export default function CreateLocation() {
    // State variables for new location form
    const [locationName, setLocationName] = useState(null);
    const [locationState, setLocationState] = useState(null);
    const [city, setCity] = useState(null);
    const [address, setAddress] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);

    const postBody = {
        location_name: locationName,
        location_state: locationState,
        location_city: city,
        location_address: address,
        location_img_url: imgUrl
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const postData = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/locations`, options)
            .then(console.log(options))
            .then(console.log(postBody))
            .then(res => res.json())
            .then(res => console.log(res.body))
    }

    return(
        <div className='location'>
            <form id="new-location-form">
                <ul>
                    <li>
                        <label>Location Name</label>
                        <input 
                        placeholder='Name' 
                        type="text"
                        required
                        onChange={(e) => setLocationName(e.target.value)}/>
                    </li>
                    <li>
                        <label>State</label>
                        <input 
                        list="state-list" 
                        id="state" 
                        name="state" 
                        required
                        onChange={(e) => setLocationState(e.target.value)}/>
                            <datalist id="state-list">
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CT">Connecticut</option>
                            <option value="CO">Colorado</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachussets</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OH">Ohio</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                            </datalist>
                    </li>
                    <li>
                        <label>City</label>
                        <input
                        type="text"
                        required 
                        onChange={(e) => setCity(e.target.value)}/>
                    </li>
                    <li>
                        <label>Address</label>
                        <input 
                        type="text"
                        required
                        onChange={(e) => setAddress(e.target.value)}/>
                    </li>
                    <li>
                        <label>Image Url</label>
                        <input 
                        type="text"
                        required
                        onChange={(e) => setImgUrl(e.target.value)}/>
                    </li>
                </ul>
                <button onClick={postData} type="submit">Submit</button>
            </form>
        </div>
    )
}