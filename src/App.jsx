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
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
    </div>
  )
}

export default App