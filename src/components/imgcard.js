import React, { Component } from 'react';
import TagList from './tagList';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ImgCard = props => {
  return (
    <div className="">
      <div className="col">
        <div className="card large hoverable">
          <div className="card-image">
            <img
              style={{ padding: '5px' }}
              className="responsive-img"
              src={props.imgUrl}
            />
          </div>
          <div style={{ overflow: 'scroll' }} className="card-content">
            <TagList tags={props.tags} />
          </div>
          <div className="card-action">
            <CopyToClipboard
              className="btn grey lighten-2 truncate"
              text={props.copyTags}
              onCopy={() => props.onCopy(true)}
            >
              <div style={{ color: '#555' }} className="truncate">
                Copy tags to clipboard
              </div>
            </CopyToClipboard>
            {props.copied ? (
              <div style={{ marginLeft: '5px' }} className="chip red accent-2">
                Copied
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
