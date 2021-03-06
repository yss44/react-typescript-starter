import * as React from 'react';

import {CommentForm} from './CommentForm';
import {CommentList} from './CommentList';

export interface Props {
  data: Array<{author: string, text: string}>
}

export interface State {

}

export class CommentBox extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    )
  }
}
