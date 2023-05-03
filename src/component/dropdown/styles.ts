import styled from 'styled-components';


export const DropdownContainer = styled.div`
  margin: 2rem auto;
  position: relative;
  min-width: 20em;
  min-height: 1.5rem;
  border: .05em solid #777;
  display: flex;
  align-items: center;
  gap: .5em;
  padding: .5em;
  border-radius: .25em;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: hsl(135, 66%, 74%)
  }
`
export const DropdownInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  padding: 0
`
export const ClearBtn = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:focus {
    color: #333
  }

  &:hover {
    color: #333
  }
`

export const Divider = styled.div`
  background: #777;
  align-self: stretch;
  width: .05em
`

export const Caret = styled.div`
  translate: 0 25%;
  border: .25em solid transparent;
  border-top-color: #777;

  &:hover {
    border-top-color: #333
  }
`

export const OptionBadge = styled.button`
  display: flex;
  align-items: center;
  border: .05em solid #777;
  border-radius: .25em;
  padding: .15em .25em;
  gap: .25em;
  cursor: pointer;
  background: none;
  outline: none;

  &:hover {
    background-color: #f8c3c3;
    border-color: #f51919;
  }

  &.focus {
    background-color: #f8c3c3;
    border-color: #f51919
  }
`

export const OptionList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${(props: any) => props.isOpen ? "block" : "none"};
  max-height: 15em;
  overflow-y: auto;
  border: .05em solid #777;
  border-radius: .25em;
  width: 100%;
  left: 0;
  top: calc(100% + .25em);
  background-color: white;
  z-index: 100;
`

export const OptionItem = styled.li`
  padding: 0 .5em;
  border-radius: .25rem;
  margin: .25em .5em;
  cursor: pointer;

  &.selected {
    background-color: rgba(6, 125, 30, 0.24)
  }

  &.highlighted {
    background-color: rgba(6, 125, 30, 0.73);
    color: white
  }
`
export const Tick = styled.span`
  float: right
`

