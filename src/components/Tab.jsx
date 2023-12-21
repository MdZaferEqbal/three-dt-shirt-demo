import { useSnapshot } from "valtio";

import state from "../store";
import { hexToRgba } from "../config/helpers";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab ? { backgroundColor: hexToRgba(snap.color), backdropFilter: "blur(4px)" } : 
    { backgroundColor: "transparent", opacity: 1 }

  return (
    <div key={tab.name} className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 
      'rounded-4 '}`} onClick={handleClick} style={activeStyles}>
      <img className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`} 
        src={tab.icon} alt={tab.name}/>
    </div>
  )
}

export default Tab
