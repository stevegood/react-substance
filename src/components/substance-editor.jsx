import React from 'react';
import Editor from 'substance/ui/editor';
import Component from 'substance/ui/component';

let $$ = Component.$$;

export default class SubstanceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentEditor: null
    };
  }

  componentDidMount() {
    var container = this.refs.substance_editor;
    this.setState({
      contentEditor: Component.mount($$(SubstanceEditor, {
        content: this.props.initialValue || ''
      }), container)
    });
  }

  render() {
    return (
      <div className="substance-editor" ref="substance_editor">
        Loading editor...
      </div>
    );
  }
};
