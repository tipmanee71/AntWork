import React, { useCallback, useState } from "react";
import { Dialog, DialogContent, styled, Typography } from "@mui/material";
import Cropper from 'react-easy-crop'
import ButtonBlue from "../../shared/general/ButtonBlue";

const StyledRoot = styled("div")({
  maxWidth: "90vw",
  maxHeight: "90vh",
  height: 650,
  "& .MuiDialogContent-root": {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  "& .part-title": {
    padding: 16,
    display: "flex",
    alignItems: "center",
    "& .title-text": {
      flexGrow: 1,
    }
  },
  "& .crop-container": {
    flexGrow: 1,
    width: "100%",
    position: "relative",
  },
  "& .control-container": {
    padding: 16,
    display: "flex",
    justifyContent: "center",
  },
  "& .reactEasyCrop_CropArea": {
    borderWidth: 4,
    "&::before, &::after": {
      border: "none"
    }
  }
})

const ModalCrop = (props) => {

  const { open, onClose, image, onConfirm, title, aspect, imgOutputWidth, imgOutputHeight } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])


  const onCropHandler = async (imageSrc, pixelCrop) => {
    const image = await new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', error => reject(error))
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = imageSrc
    })

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = imgOutputWidth || 400
    canvas.height = imgOutputHeight || 400

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      canvas.width,
      canvas.height
    )

    const cropedImage = await new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob)
      }, 'image/png')
    })

    onConfirm(cropedImage)

  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style:{
          borderRadius: 20,
        }
      }}
    >
      <StyledRoot>
        <DialogContent>
          <div className="part-title">
            <Typography className="title-text">{title}</Typography>
            <ButtonBlue variant="contained" onClick={()=>{onCropHandler(image, croppedAreaPixels)}}>ยืนยัน</ButtonBlue>
          </div>
          <div className="crop-container">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              aspect={aspect || 1}
              minZoom={1}
              maxZoom={9}
            />
          </div>
          <div className="control-container">
            <input
              type="range"
              value={zoom}
              min={1}
              max={9}
              step={0.01}
              aria-labelledby="Zoom"
              onChange={(e) => {
                setZoom(e.target.value)
              }}
            />
          </div>

        </DialogContent>
      </StyledRoot>
    </Dialog>
  )
}

export default ModalCrop;