import Block from 'proxy-pattern/Block';
import BlockProxy from 'proxy-pattern/BlockProxy';

const BLOCK_CHILD_NUMBER = 100;

const createId = () => Math.random().toString(36).substring(2, 15);

const createBlock = () => {
  const id = createId();

  return new Block(id, `block-${id}`);
};

const createBlockChildren = (count: number) => {
  const blocks = [];

  for (let i = 0; i < count; i += 1) {
    blocks.push(createBlock());
  }

  return blocks;
};

const addBlockChildren = (block: Block, childrenCount: number) => {
  const children = createBlockChildren(childrenCount);

  for (const child of children) {
    block.add(child);
  }
};

const createBlockWithChildren = (childrenCount: number) => {
  const block = createBlock();
  const children = createBlockChildren(childrenCount);

  for (const child of children) {
    block.add(child);
  }

  return block;
};
const createRoot = () => {
  const root = createBlockWithChildren(BLOCK_CHILD_NUMBER);

  root.children.forEach((child) => {
    addBlockChildren(child, BLOCK_CHILD_NUMBER);
  });

  root.children.forEach((child) => {
    child.children.forEach((grandChild) => {
      addBlockChildren(grandChild, BLOCK_CHILD_NUMBER);
    });
  });

  return root;
};

const root = createRoot();

root.find(
  root.children[BLOCK_CHILD_NUMBER - 1].children[BLOCK_CHILD_NUMBER - 1].id
);

const createRootProxy = () => new BlockProxy(root.id, root.name, root.children);

const rootProxy = createRootProxy();

rootProxy.find(
  rootProxy.children[BLOCK_CHILD_NUMBER - 1].children[BLOCK_CHILD_NUMBER - 1].id
);
