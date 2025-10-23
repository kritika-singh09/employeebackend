import Notification from "../models/Notification.js";

// Create Notification
export const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate('userId');
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Notification by ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate('userId');
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Notification
export const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Notification
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};