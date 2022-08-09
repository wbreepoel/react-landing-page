import ServiceBlocks from './ServiceBlocks'

const SERVICE_DATA = [
    {
        url: 'https://assets.codepen.io/6060109/agency-service-1.png',
        text: 'WEB DESIGN'
    },
    {
        url: 'https://assets.codepen.io/6060109/agency-service-2.png',
        text: 'ECOMMERCE'
    },
    {
        url: 'https://assets.codepen.io/6060109/agency-service-3.png',
        text: 'AUTOMATION'
    }
]

function ServiceSection () {
    return (
        <div className='service-section'>
            <h1>OUR SERVICES</h1>
            <div className='service-items'>
                {
                    SERVICE_DATA.map(data => (
                            <ServiceBlocks data={data} />
                    )
                )
                }
            </div>
        </div>
    )
}

export default ServiceSection