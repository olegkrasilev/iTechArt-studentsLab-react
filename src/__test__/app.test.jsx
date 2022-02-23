import App from 'src/App';

describe('on initial render should be in the dom', () => {
  it('Should be in the dom', () => {
    expect(App).toBeInTheDocument;
  });
});
