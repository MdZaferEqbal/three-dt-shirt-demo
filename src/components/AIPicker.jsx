import { CustomButton } from "../components"

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea className="aipicker-textarea rounded-md" rows={5} value={prompt} 
        placeholder="To use this prompt, upgrading the OpenAI plan is necessary. Currently, we have deactivated it, but we plan to incorporate it in the future." 
        // onChange={(e) => setPrompt(e.target.value)}
      />
        <div className="flex flex-wrap gap-3">
          {generatingImg ? (
            <CustomButton type="outline" title="Asking AI..." customStyles="text-xs"/>
          ) : (
            <>
              <CustomButton type="outline" title="AI Logo" customStyles="text-xs"
                handleClick={() => handleSubmit('logo')} disableButton={true}/>
              <CustomButton type="filled" title="AI Full" customStyles="text-xs"
                handleClick={() => handleSubmit('full')} disableButton={true}/>
            </>
          )}
        </div>
    </div>
  )
}

export default AIPicker
