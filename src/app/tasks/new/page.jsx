"use client"
import React from "react";
import {Button, Input, Label, Modal, TextField, ListBox, Select, Form, FieldError} from "@heroui/react";
import { newTaskAction } from "@/lib/action";

const page = () => {
  return (
    <div className="w-1/3 mx-auto">
        <h2>Add new Task</h2>
      <Form action={newTaskAction} className="flex flex-col gap-4">
        <TextField
        isRequired
        minLength={5}
        validate={(value) => {
          if(value.length < 5) {
            return "Password must be at least 5 characters";
          }
        }}
         className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your Task title" />
          <FieldError />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your description" />
        </TextField>

        <Select name="Priority" className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select name="Status" className="w-[256px]" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="Progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="complete" textValue="Complete">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assignTo">
          <Label>Assign To</Label>
          <Input placeholder="Enter your Assign To" />
        </TextField>
        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Submit Task
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default page;
