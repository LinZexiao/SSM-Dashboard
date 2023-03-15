import Footer from "rc-footer"
import 'rc-footer/assets/index.css';
import '@/component/footer.css';


export default function AppFooter(props) {
    return (
        <>
            <Footer theme='light'
                columns={[
                    {
                        title: 'Resources',
                        style: { textAlign: 'left' },
                        items: [
                            {
                                icon: (
                                    <img src="https://venus.filecoin.io/assets/venus-logo-title.svg" />
                                ),
                                url: 'https://venus.filecoin.io/',
                                title: 'Venus',
                                description: '',
                                openExternal: true,
                            },
                            {
                                icon: (
                                    <img src="https://sophon.venus-fil.io/assets/sophon-icon.png" />
                                ),
                                url: 'https://sophon.venus-fil.io/',
                                title: 'Sophon',
                                description: '',
                                openExternal: true,
                            },
                            {
                                icon: (
                                    <img src="https://damocles.venus-fil.io/assets/damocles-icon.png" />
                                ),
                                url: 'https://damocles.venus-fil.io/',
                                title: 'Damocles',
                                description: '',
                                openExternal: true,
                            },
                            {
                                icon: (
                                    <img src="https://droplet.venus-fil.io/assets/droplet-hero.jpg" />
                                ),
                                url: 'https://droplet.venus-fil.io/',
                                title: 'Doplet',
                                description: '',
                                openExternal: true,
                            },
                        ],

                    },
                    {
                        title: 'Community',
                        style: { textAlign: 'left' },
                        items: [
                            {
                                icon: (
                                    <img src="https://th.bing.com/th?id=ODLS.fb964172-d6bb-412d-ad1f-d9cd9e264de2&w=16&h=16&o=6&pid=1.2" />
                                ),
                                url: 'https://app.slack.com/client/TEHTVS1L6/CEHHJNJS3',
                                title: 'Venus',
                                description: '',
                                openExternal: true,
                            },
                            {
                                icon: (
                                    <img src="https://th.bing.com/th?id=ODLS.fb964172-d6bb-412d-ad1f-d9cd9e264de2&w=16&h=16&o=6&pid=1.2" />
                                ),
                                url: 'https://app.slack.com/client/TEHTVS1L6/C028PCH8L31',
                                title: 'Venus cn',
                                description: '',
                                openExternal: true,
                            },

                        ],

                    },
                    {
                        title: 'Help',
                        style: { textAlign: 'left' },
                        items: [
                            {
                                icon: github_icon,
                                url: 'https://github.com/ipfs-force-community/venus-tool',
                                title: 'SSM',
                                description: '',
                                openExternal: true,
                            },
                            {
                                icon: github_icon,
                                url: 'https://github.com/filecoin-project/venus/issues/new/choose',
                                title: 'issue',
                                description: '',
                                openExternal: true,
                            },
                        ],
                    },
                ]}
                bottom="Made with ❤️ by Venus Tearm and IPFS Force Community"
            />
        </>
    )
}

const github_icon = (<svg viewBox="64 64 896 896" focusable="false" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>)
