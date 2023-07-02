import { BlockId } from 'proxy-pattern/Block';

interface BlockProxyInterface {
  id: BlockId;
  name: string;
  children: BlockProxyInterface[];
  add(block: BlockProxyInterface): void;
  remove(block: BlockProxyInterface): void;
  find(id: string): BlockProxyInterface | undefined;
}

class BlockProxy implements BlockProxyInterface {
  id: BlockId;

  name: string;

  // eslint-disable-next-line no-use-before-define
  children: BlockProxyInterface[];

  addCache: Record<BlockId, boolean> = {};

  removeCache: Record<BlockId, boolean> = {};

  findCache: Record<BlockId, BlockProxyInterface> = {};

  constructor(id: string, name: string, children?: BlockProxyInterface[]) {
    this.id = id;
    this.name = name;
    this.children = children ?? [];
  }

  add(block: BlockProxyInterface): void {
    this.children.push(block);
  }

  remove(block: BlockProxyInterface): void {
    this.children = this.children.filter((x) => x.id !== block.id);
  }

  find(id: string): BlockProxyInterface | undefined {
    if (this.findCache[id]) {
      return this.findCache[id];
    }

    for (const block of this.children) {
      if (block.id === id) {
        this.findCache[id] = block;
        return block;
      }

      const found = block.find(id);

      if (found) {
        this.findCache[id] = found;
        return found;
      }
    }

    return undefined;
  }
}

export default BlockProxy;
