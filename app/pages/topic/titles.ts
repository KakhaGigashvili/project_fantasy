interface Title {
    id: number;
    title?: string;
    linkUrl: string;
}

const titles: Title[] = [{  id: 1,
                            title: 'კოსმიერი',
                            linkUrl: 'pages/topic/cosmere'
                        },
                        {   id: 2,
                            title:'დიუნი',
                            linkUrl: 'pages/topic/dune'
                        },
                        {
                            id:3,
                            title: 'ბეჭდების მბრძანებლი',
                            linkUrl: 'pages/topic/tlotr'
                        },
                        {
                            id:4,
                            title: 'გრიშავერსი',
                            linkUrl: 'pages/topic/grishaverse'
                        }
]

export default titles