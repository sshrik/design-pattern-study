export type BlockId = string;

class Block {
  id: BlockId;

  name: string;

  // eslint-disable-next-line no-use-before-define
  children: Block[];

  constructor(id: BlockId, name: string, children?: Block[]) {
    this.id = id;
    this.name = name;
    this.children = children ?? [];
  }

  add(block: Block): void {
    this.children.push(block);
  }

  remove(block: Block): void {
    this.children = this.children.filter((x) => x.id !== block.id);
  }

  find(id: string): Block | undefined {
    for (const block of this.children) {
      if (block.id === id) return block;

      const found = block.find(id);

      if (found) return found;
    }

    return undefined;
  }
}

export default Block;
