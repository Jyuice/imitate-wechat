import React, { Component } from 'react'
import IndexList from '../../components/adressbook/IndexList'
import NameCard from '../../components/adressbook/NameCard'

const topBlock = [
    {
        id: 0,
        color: "orange",
        icon: `<svg t="1627547446017" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="75724" width="22" height="22"><path d="M821.326552 629.285866a197.24857 197.24857 0 1 0 198.984531 197.248569A197.899555 197.899555 0 0 0 821.326552 629.285866z m88.100021 224.80695h-62.494596v63.362577a27.124391 27.124391 0 0 1-54.031786 0v-63.145582h-59.67366a26.25641 26.25641 0 0 1-26.6904-27.558381 26.690401 26.690401 0 0 1 26.6904-26.6904h59.67366v-65.098538a27.124391 27.124391 0 0 1 54.031786 0v65.098538h62.494596A26.039415 26.039415 0 0 1 936.767959 826.75143a26.907396 26.907396 0 0 1-26.473405 27.558381z" p-id="75725" fill="#ffffff"></path><path d="M580.895953 826.75143a238.694639 238.694639 0 0 1 198.98453-233.920746 443.755033 443.755033 0 0 0-209.183301-134.102987 234.354736 234.354736 0 0 0 123.904217-214.60818 246.940453 246.940453 0 0 0-493.663912 0 233.269761 233.269761 0 0 0 120.2153 214.60818A449.179911 449.179911 0 0 0 3.688917 886.42509c0 80.722187 2.820937 85.279085 91.788938 86.79805h534.892986a243.468531 243.468531 0 0 1-49.474888-146.47171z" p-id="75726" fill="#ffffff"></path></svg>`,
        name: '新的朋友'
    },
    {
        id: 1,
        color: "orange",
        icon: `<svg t="1627547673955" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="85854" width="22" height="22"><path d="M129.536 84.992L512 0l382.464 84.992a46.545455 46.545455 0 0 1 36.445091 45.428364v464.849454a279.272727 279.272727 0 0 1-124.369455 232.354909L512 1024l-294.539636-196.375273A279.272727 279.272727 0 0 1 93.090909 595.316364V130.420364a46.545455 46.545455 0 0 1 36.445091-45.428364zM512 465.454545a116.363636 116.363636 0 1 0 0-232.727272 116.363636 116.363636 0 0 0 0 232.727272z m-208.197818 232.727273h416.395636a209.454545 209.454545 0 0 0-416.395636 0z" p-id="85855" fill="#ffffff"></path></svg>`,
        name: '仅聊天的朋友'
    },
    {
        id: 2,
        color: "green",
        icon: `<svg t="1627547733471" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="87474" width="22" height="22"><path d="M779.2 793.5c-1.9-14.1-6.6-25.3-14.1-34.7-6.6-9.4-15.9-16.9-25.3-23.4-10.3-6.6-21.6-12.2-33.8-15.9s-25.3-7.5-37.5-11.2c-13.1-3.8-25.3-7.5-37.5-12.2-12.2-3.8-23.4-9.4-32.8-15.9-11.2-6.6-19.7-14.1-26.2-20.6-4.7-5.6-8.4-11.2-12.2-16.9-1.9-2.8-2.8-6.6-3.8-9.4-0.9-4.7-1.9-10.3-1.9-15 0-7.5 0-15 0.9-24.4 0.9-11.2 4.7-22.5 13.1-30.9 4.7-4.7 10.3-9.4 15-14.1l11.2-8.4c4.7-4.7 9.4-10.3 12.2-16.9 3.8-6.6 6.6-14.1 9.4-21.6 1.9-5.6 4.7-11.2 6.6-16.9 0.9-2.8 2.8-5.6 3.8-9.4 5.6-17.8 9.4-33.8 12.2-47.8 3.8-16.9 5.6-33.8 6.6-55.3 0.1-2.5 0.1-5 0.1-7.6 0.2-37.8-4.6-75.5-16-111.5 0-0.9-0.9-2.8-0.9-3.8-4.7-17.8-12.2-34.7-22.5-50.6-0.9-0.9-1.9-2.8-2.8-3.8l-0.9-0.9c-0.9-1.9-2.8-3.8-3.8-4.7-1.9-1.9-2.8-3.8-3.8-5.6l-0.9-0.9c-8.4-10.3-17.8-19.7-27.2-26.2-13.1-9.4-26.2-17.8-40.3-23.4-13.1-5.6-27.2-9.4-41.3-11.2s-27.2-2.8-39.4-2.8h-7.5c-13.1 0-26.2 0.9-39.4 2.8-14.1 1.9-28.1 5.6-41.2 11.2-14.1 5.6-27.2 13.1-40.3 23.4-9.4 7.5-18.8 15.9-27.2 26.2l-0.9 0.9c-1.9 1.9-2.8 3.8-3.8 5.6s-2.8 2.8-3.8 4.7l-0.9 0.9c-0.9 0.9-1.9 2.8-2.8 3.8-10.3 15.9-17.8 32.8-22.5 50.6 0 0.9-0.9 2.8-0.9 3.8-10.5 36-16.1 73.7-16 111.5 0 2.5 0 5 0.1 7.6 0.9 21.6 2.8 38.4 6.6 55.3 2.8 14.1 6.6 30 12.2 47.8 0.9 2.8 1.9 6.6 3.8 9.4 2.8 5.6 4.7 11.2 6.6 16.9 2.8 7.5 5.6 14.1 9.4 21.6 2.8 6.6 6.6 12.2 12.2 16.9l11.2 8.4c5.6 4.7 10.3 9.4 15 14.1 7.5 8.4 12.2 18.8 13.1 30.9 0.9 8.4 0.9 16.9 0.9 24.4 0 4.7-0.9 9.4-1.9 13.1v1.9c-0.9 3.8-1.9 6.6-3.8 9.4-0.9 2.8-2.8 4.7-4.7 7.5-0.9 1.9-2.8 3.8-3.8 5.6s-2.8 2.8-3.8 4.7c-6.6 6.6-15 13.1-26.2 20.6-10.3 6.6-21.6 11.2-32.8 15.9-12.2 4.7-24.4 8.4-37.5 12.2s-25.3 7.5-37.5 11.2-23.4 8.4-33.8 15.9c-10.3 6.6-18.7 14.1-25.3 23.4s-11.2 20.6-14.1 34.7c-3.5 22.9-5.2 43.1-5.3 60.9 0 10.6 0.5 20.3 1.5 29.1 2.8 23.4 7.5 36.6 14.1 41.2 3.8 2.8 11.2 5.6 24.4 8.4s28.1 5.6 46.9 8.4c20.6 2.8 40.3 5.6 60.9 7.5 22.5 2.8 45 4.7 68.4 6.6 13.1 0.9 26.2 1.9 38.4 2.8 9.4 0.9 18.8 0.9 28.1 1.9h29.1c1.6 0 3.1 0 4.7 0.1h1.7c1.2 0 2.4 0.1 3.6 0.1 3.3 0.1 6.7 0.2 10 0.2h3.2c1.1 0 2.3-0.1 3.4-0.1h0.9c1.1-0.1 2.3-0.1 3.4-0.2h60c9.4-0.9 18.8-0.9 28.1-1.9 13.1-0.9 26.2-1.9 38.4-2.8 22.5-1.9 45-3.8 68.4-6.6 20.6-1.9 41.2-4.7 60.9-7.5 18.8-2.8 33.8-5.6 46.9-8.4s20.6-5.6 24.4-8.4c5.6-4.7 11.2-17.8 14.1-41.2 1.2-9 1.9-18.9 1.9-29.8 0-14-1.2-29.6-3.8-47-0.7-4.8-0.7-9.5-1.6-14.2z" p-id="87475" fill="#ffffff"></path><path d="M920.7 667c-1.9-12.2-6.6-22.5-12.2-30.9-6.6-8.4-14.1-15-23.4-20.6s-19.7-10.3-30-14.1c-11.2-3.8-22.5-6.6-33.8-10.3s-22.5-6.6-33.8-10.3-20.6-8.4-30-14.1c-10.3-6.6-17.8-12.2-23.4-17.8-3.8-4.7-7.5-9.4-11.2-15-0.9-2.8-2.8-5.6-3.8-8.4-0.9-4.7-1.9-9.4-1.9-14.1 0-6.6 0-14.1 0.9-21.6 0-10.3 4.7-19.7 11.2-27.2 4.7-4.7 9.4-8.4 14.1-13.1 3.8-2.8 7.5-4.7 10.3-7.5 4.7-3.8 8.4-9.4 10.3-15l8.4-19.7c1.9-4.7 3.8-10.3 6.6-15 0.9-2.8 2.8-5.6 2.8-8.4 5.6-15.9 8.4-30 11.2-43.1 2.8-15 4.7-30 5.6-49.7 0.9-36.6-3.8-72.2-14.1-106.9 0-0.9-0.9-1.9-0.9-3.8-4.7-15.9-11.2-31.9-20.6-45-0.9-0.9-1.9-1.9-1.9-3.8 0 0 0-0.9-0.9-0.9-0.9-1.9-1.9-2.8-2.8-4.7s-2.8-3.8-3.8-5.6l-0.9-0.9c-7.5-9.4-15.9-17.8-24.4-23.4-12.2-8.4-23.4-15.9-36.6-20.6-12.2-4.7-24.4-8.4-36.6-10.3-11.2-1.9-23.4-2.8-34.7-2.8h-7.5c-11.2 0-23.4 0.9-35.6 2.8-13.1 1.9-25.3 5.6-36.6 10.3-4.2 1.6-8.3 3.5-12.5 5.7 5.7 1.8 11.2 3.9 16.7 6.2 19.6 7.9 36.3 19 50 28.8 12 8.4 23.9 19.6 35.3 33.4l5 5 2.2 4.3c1.2 1.4 2.5 3 3.7 4.7 0.9 1.1 1.7 2.1 2.4 3l1 1 2.9 4.4c13.1 20.3 22.9 42.2 28.9 65.1l0.3 1.2c0.2 0.8 0.5 1.7 0.8 2.8 12.7 41 18.5 85.7 17.4 132.7v1c-1.1 25.3-3.4 44.3-7.6 63.5-3.6 18.1-7.9 35-13.1 51.5-1.6 5.9-3.7 10.3-4.9 12.9-1.4 3.8-2.8 7.3-4 10.1-0.8 1.9-1.6 3.9-2 5l-0.3 0.9-0.3 0.9c-3 8.1-6.5 17.2-11.5 26.5-4.9 10.4-12 20.2-21.5 29.7l-2.5 2.5-2.8 2.1-8.7 6.5c-2.2 2.1-4.4 4.1-6.4 6-1.5 1.4-3 2.7-4.3 3.9-0.1 0.3-0.1 0.7-0.1 1.2v0.8c-0.7 6.8-0.7 12.2-0.7 19.1 0 0.2 0.1 0.6 0.2 1.4 1.6 2.4 3.2 4.6 4.7 6.6 3.6 3.5 8.4 7.6 14.4 11.1l1.8 1 1.7 1.2c5.4 3.8 12.1 7 18.8 9.1l1.6 0.5 1.6 0.6c11.3 4.3 22.7 7.7 33.3 10.8l0.5 0.1 0.5 0.1c5.8 1.8 12.2 3.7 18.2 5.5 6.3 1.9 12.9 3.8 19.2 5.8 15.5 4.8 30.9 12 45.9 21.5l0.9 0.6 0.9 0.6c11.2 7.8 25.4 18.8 36.7 34.4 12.4 16 20.3 35 23.4 56.6 0.7 4 1.1 7.5 1.3 10.1 0.1 0.8 0.2 1.9 0.3 2.4l0.2 0.9 0.2 1.2c0.1 0.7 0.2 1.4 0.3 2 5.1-0.6 10.1-1.2 15-2 16.9-2.8 30.9-4.7 42.2-7.5s18.8-4.7 21.6-7.5c5.6-3.8 9.4-15.9 12.2-36.6 5.6-21.4 3.7-48.6-1-81.4z" p-id="87476" fill="#ffffff"></path></svg>`,
        name: '群聊'
    },
    {
        id: 3,
        color: "blue",
        icon: `<svg t="1627547783168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="89216" width="22" height="22"><path d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-0.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2c-3.9 3.9-3.9 10.2 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" p-id="89217" fill="#ffffff"></path></svg>`,
        name: '标签'
    },
    {
        id: 4,
        color: "blue",
        icon: `<svg t="1627547802329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="89997" width="22" height="22"><path d="M496.932571 146.919619c103.619048 0 187.977143 105.520762 187.977143 235.276191 0 65.974857-22.332952 129.26781-61.244952 173.641142a240.347429 240.347429 0 0 1-13.507048 13.897143c-11.946667 13.507048-17.359238 26.136381-17.359238 39.497143 0 31.061333 31.305143 61.927619 82.407619 82.16381l9.849905 3.657142c9.069714 3.169524 19.017143 5.851429 28.867048 8.484572l5.461333 1.316571c120.295619 42.471619 191.634286 115.273143 191.634286 194.998857 0 11.702857-8.43581 21.455238-19.602286 23.405715l-4.242286 0.438857H102.692571a23.844571 23.844571 0 0 1-23.844571-23.893333c0-83.236571 76.361143-157.598476 204.068571-198.656a408.624762 408.624762 0 0 1 20.284953-6.095239l6.826666-1.755428c57.246476-19.260952 92.793905-50.858667 92.793905-82.602667 0-16.042667-8.777143-29.500952-17.310476-38.814476l-3.657143-3.754667c-46.372571-44.617143-72.996571-112.249905-72.996571-186.026666 0-129.706667 84.504381-235.178667 188.074666-235.178667z m-4.632381 463.286857L426.666667 790.235429l65.584762 84.699428 70.899809-84.699428-70.899809-180.028953z" p-id="89998" fill="#ffffff"></path></svg>`,
        name: '公众号'
    },
]

export default class AddressBook extends Component {
    render() {
        return (
            <div>
                <IndexList/>
                {topBlock.map(i => (
                    <NameCard key={i.id} list={topBlock[i.id]}/>
                ))}
            </div>
        )
    }
}
