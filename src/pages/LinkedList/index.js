import React, { useState, useEffect } from "react";
import compose from "../../utils/compose";
import withMenu from "../../lib/withMenu";
import LinkedList from "../../lib/data-structures/linked-list";
import Square from "../../components/elements/Square";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import sleep from "../../utils/sleep";

import { LinkListPageStyles, MenuStyles, LinkedListStyles } from "./styles";

const linkedList = new LinkedList();

const LinkedListPage = props => {
  const [action, setAction] = useState(null);
  const [currentNode, setCurrentNode] = useState(null);
  const [addedValue, setAddedValue] = useState("");
  const [deletedValue, setDeletedNode] = useState("");
  const [findValue, setFind] = useState("");
  const [linkedListArray, setLinkedListArray] = useState(linkedList.toArray());

  useEffect(() => {
    const animate = async () => {
      if (action) {
        switch (action) {
          case "find": {
            linkedList.find(findValue, async node => {
              await sleep(300);
              setCurrentNode(node);
            });
            setAction(null);
            break;
          }
          default:
            break;
        }
      }
    };
    animate();
  });

  return (
    <LinkListPageStyles>
      <h1>Linked List</h1>
      <MenuStyles>
        <div>
          <div>
            <Input
              type="text"
              onChange={e => setAddedValue(e.target.value)}
              value={addedValue}
            />
            <Button
              onClick={e => {
                if (addedValue) {
                  linkedList.add(addedValue);
                  setCurrentNode(linkedList.head);
                  setAddedValue("");
                  setLinkedListArray(linkedList.toArray());
                }
              }}
            >
              Add
            </Button>
          </div>
          <div>
            <Input
              type="text"
              onChange={e => setDeletedNode(e.target.value)}
              value={deletedValue}
            />
            <Button
              onClick={e => {
                if (deletedValue) {
                  linkedList.delete(deletedValue);
                  setDeletedNode("");
                  setLinkedListArray(linkedList.toArray());
                }
              }}
            >
              Delete
            </Button>
          </div>
          <div>
            <Input
              type="text"
              onChange={e => setFind(e.target.value)}
              value={findValue}
            />
            <Button
              onClick={e => {
                setAction("find");
              }}
            >
              Find
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                linkedList.reverse();
                setLinkedListArray(linkedList.toArray());
              }}
            >
              Reverse
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                linkedList.deleteHead();
                setLinkedListArray(linkedList.toArray());
              }}
            >
              Delete Head
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                linkedList.deleteTail();
                setLinkedListArray(linkedList.toArray());
              }}
            >
              Delete Tail
            </Button>
          </div>
        </div>
      </MenuStyles>

      <LinkedListStyles>
        {linkedListArray.map((node, i) => {
          return (
            <Square
              key={i}
              color={node.value === currentNode.value ? "blue" : "lightgray"}
            >
              {node.value}
            </Square>
          );
        })}
      </LinkedListStyles>
    </LinkListPageStyles>
  );
};

export default compose(withMenu)(LinkedListPage);
