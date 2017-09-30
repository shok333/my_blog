import React from 'react';

export default class ImageSizeElement extends React.Component{
    imageResize(){
        document.body.style.overflow='hidden';

        function cropButtonClicked(){
            let cropper=this.state.cropper;
            let image=cropper.getCroppedCanvas();

            function resize(img, w,  h) {
                console.log(img.width, img.height);

                var steps = Math.ceil(Math.log2(img.width / w));
                var sW = w * Math.pow(2, steps - 1);
                var sH = h * Math.pow(2, steps - 1);
                var x = 2;

                while (steps--) {
                    console.log(sW, sH);
                    var canvas = document.createElement('canvas');
                    canvas.width = sW;
                    canvas.height = sH;
                    canvas.getContext('2d').drawImage(img, 0, 0, sW, sH);
                    img = canvas;

                    sW = Math.round(sW / x);
                    sH = Math.round(sH / x);
                }
                return img;
            }
            let canvas=resize(image,200,200);
            let smallCanvas=resize(image,100,100);

            smallCanvas.toBlob((blob)=>{
                blob.name='imagename.'+blob.type.substr(6);
                this.setState({smallImage: blob});
                let fr = new FileReader();
            });

            canvas.toBlob((blob)=>{
                blob.name='imagename.'+blob.type.substr(6);
                this.setState({image: blob});
                let fr = new FileReader();
                fr.addEventListener("load", (event)=> {
                    this.props.setImages(this.state.image,this.state.smallImage);

                    this.setState({imagePanel: <img id='image' src={event.target.result}/>});
                    document.body.style.overflow='';
                });
                fr.readAsDataURL(blob);

            });





        }

        this.setState({imagePanel:
            <div className='image-panel'>
                <div id='container'>
                    <img id='image' src={this.props.loadedImage}/>
                </div>
                <div>
                    <button id='crop' className='btn'  onClick={cropButtonClicked.bind(this)}>Обрезать</button>
                </div>
            </div>
        });


    }
    componentDidUpdate(){
        if(!this.state.cropper){
            var cropper = new Cropper(image, {aspectRatio: 1,zoomOnWheel: false});
            image.addEventListener('ready', function () {
                cropper.zoom(0.01);
            });

            this.setState({cropper: cropper});
        }
    }
    constructor(){
        super(arguments[0]);
        this.state={imagePanel: <div/>};
    }
    componentDidMount(){
        this.imageResize();
    }
    render(){
        return <div>{this.state.imagePanel}</div>
    }
}