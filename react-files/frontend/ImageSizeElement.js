import React from 'react';
import { connect } from 'react-redux';

class ImageSizeElement extends React.Component{
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
            if(this.props.square){
                var canvas=resize(image,200,200);
                var smallCanvas=resize(image,100,100);
            }
            else{
                var canvas=image;
                var smallCanvas=image;
            }

            let key=+(new Date);

            smallCanvas.toBlob((blob)=>{
                blob.name='s'+key+'.'+blob.type.substr(6);
                this.smallImage=blob;
                console.dir(this.smallImage);

                canvas.toBlob((blob)=>{
                    let fr = new FileReader();
                    fr.addEventListener("load", (event)=> {
                        console.dir(this.smallImage);
                        this.props.dispatch({type: 'ADD_IMAGE', key: key, image: blob, smallImage: this.smallImage, imageForRendering: <img id='image' src={event.target.result}/>});
                        this.props.dispatch({type: 'ADD_ELEMENT', element:
                            <div key={key} data-key={key} className='row image-row'>
                                <img src={event.target.result} className='col-lg-10'/>
                                <div className='col-lg-2'>
                                    <button key={2} data-key={key} className='btn glyphicon glyphicon-edit' ></button>
                                    <button key={3} data-key={key} className='btn glyphicon glyphicon-remove-sign' onClick={this.deleteImage.bind(this)}></button>
                                </div>
                            </div>
                        });
                        this.props.dispatch({type: 'REMOVE_ELEMENT_FOR_EDIT'});
                        document.body.style.overflow='';
                    });
                    fr.readAsDataURL(blob);
                    blob.name=key+'.'+blob.type.substr(6);

                });

            });

            //console.dir(smallCanvas);





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
    deleteImage(event){
        let key=event.target.dataset.key;
        this.props.dispatch({type: 'REMOVE_IMAGE', key: key});
        this.props.dispatch({type: 'REMOVE_ELEMENT', key: key});
    }
    componentDidUpdate(){
        if(!this.state.cropper){
            if(this.props.square){
                var cropper = new Cropper(image, {aspectRatio: 1,zoomOnWheel: false});
            }
            else{
                var cropper = new Cropper(image, {zoomOnWheel: false});
            }

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

function mapStateToProps(state){
    return {
        generalState: state.generalState
    }
}
export default connect(mapStateToProps)(ImageSizeElement);