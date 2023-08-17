import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask the AI for generative art!"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyle="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => alert('We are sorry, this feature is not available in the deme version.')}
              customStyle="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => alert('We are sorry, this feature is not available in the deme version.')}
              customStyle="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker