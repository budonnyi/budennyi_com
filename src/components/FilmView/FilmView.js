import React from 'react'
import Classes from './FilmView.module.css'
import FilmData from '../FilmData'
import Trailers from '../Trailers'
import ModalVideo from 'react-modal-video'

// import connect from 'react-redux'

class FilmView extends React.Component {

    state = {
        isOpen: false,
        video: null
    };

    selectVideo = (video) => {
        console.log(video)

        this.setState({video, isOpen: true});
    };


    render() {

        const {video, isOpen} = this.state;

        const description = this.props.description.split('/');

        const descItems = description.map((item, index) =>
            <p key={index}
               className={Classes.description}>{item}</p>
        )
        return (
            <div className={Classes.maincontent}>

                <div className={'offset-md-4 col-md-8 col-sm-12'}>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <img src={'/images/posters/' + this.props.image + '.jpeg'}
                                 className={Classes.bigpicture}
                                 alt={this.props.name}/>

                            <FilmData {...this.props} />

                        </div>

                        <div className={'col-md-7'}>
                            <div>
                                {descItems}
                            </div>

                            <Trailers {...this.props} selectVideo={this.selectVideo}/>

                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel="vimeo"
                    isOpen={isOpen}
                    videoId={video}
                    onClose={() => this.setState({isOpen: false})}
                />

            </div>
        )
    }
}

export default FilmView
