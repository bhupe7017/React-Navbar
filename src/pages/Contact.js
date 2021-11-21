import Header from '../components/Header'
import Meta from '../components/Meta'

const Contact = () => {
  // page content

  const pageTitle = 'Contact'
  const pageDescription = 'welcome to react bootstrap template'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Contact