---
sidebar_position: 4
sidebar_class_name: hidden
---

import CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';
import DeepDive from '@site/src/components/DeepDive';
import ImageCard from '@site/src/components/ImageCard';
import ChatBaseBubble from "@site/src/components/ChatBaseBubble";

# Week 4: OOP


<ChatBaseBubble/>

### Concept Map

```mermaid
flowchart TD
    A((Week 4<br>Object Oriented<br>Programming)) --> |uses| O((Object))
    style A color:red
    O --> |defined in| C((Class))
    O --> |has| R((Relationship))
    O --> |creates| OI((Object Instance))
    O --> |has| M((Methods))
    O --> |has| ATTR((Attributes))
    UML((UML)) --> |represents| C
    UML --> |describes| R
    R --> |can be| HA((has-a))
    R --> |can be| IA((is-a))
    OI --> |reference| ALIAS((Aliasing))
    HA --> |called| COMP((Composition))
    IA --> |called| INH((Inheritance))
    M --> |can be| SM((Special Methods))
    POP((POP)) --> |is a| M
    PUSH((PUSH)) --> |is a| M
    STACK((Stack)) --> |implemented as| O
    STACK --> |has| PUSH
    STACK --> |has| POP
    STACK --> |has| I((items))
    I --> |is a| ATTR
    QUEUE((QUEUE)) --> |has| I
    DS((Data Structure)) --> |learns| STACK
    DS((Data Structure)) --> |learns| QUEUE
    style DS color:red
    STACK --> |is| LDT((Linear Data Structure))
    QUEUE --> |is| LDT
    QUEUE --> |has| EQ((Enqueue))
    QUEUE --> |has| DQ((Dequeue))
    QUEUE --> |implemented as| O
    EQ --> |is a| M
    DQ --> |is a| M
    SETTER((Setter)) --> |is a| M
    SETTER --> |modifies| ATTR
    GETTER((Getter)) --> |is a| M
    GETTER --> |access| ATTR
    PROP((Property)) --> |encapsulates| ATTR
    PROP --> |uses| GETTER
    PROP --> |uses| SETTER
    PROP --> |can be| COMP((computed))
    PROP --> |can be| STR((stored))
    COMP --> |has not| SETTER
    COMP --> |has| GETTER
    STR --> |has| GETTER
    STR --> |has| SETTER
```

See below if you need to zoom in.

![](https://www.dropbox.com/scl/fi/cg95ksw5t32tmk8rba384/DDW-Concept-Map-Week-4.drawio.png?rlkey=f38imq2og0opnsh2cvgahjz3d&raw=1)
