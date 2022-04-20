import { SectionWrapper,Features,Download } from "./components/index"
import assets from './assets';

const App = () => {
  return (
    <div>
      <SectionWrapper 
        title="Your own store of NFTs.Start Selling and Growing."
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </div>
  )
}

export default App