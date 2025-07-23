'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Database, Key, Eye, EyeOff, Trash2, Edit, Save, X } from 'lucide-react';
import axios, { AxiosError } from 'axios';

interface Record {
  [key: string]: string | number | boolean | object | null;
}

interface ApiError {
  message?: string;
}

export default function SimpleRestStore() {
  const [secret, setSecret] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [records, setRecords] = useState<Record>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');

  const API_BASE = 'https://store.zapier.com/api/records';

  const fetchRecords = useCallback(async () => {
    if (!secret) {
      setError('Please enter your secret key');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(API_BASE, {
        params: { secret },
      });
      setRecords(response.data || {});
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.message || 'Failed to fetch records');
    } finally {
      setLoading(false);
    }
  }, [secret]);

  const addRecord = async () => {
    if (!secret || !newKey || !newValue) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let parsedValue: string | number | boolean | object | null;
      try {
        parsedValue = JSON.parse(newValue);
      } catch {
        parsedValue = newValue;
      }

      await axios.post(
        API_BASE,
        { [newKey]: parsedValue },
        { params: { secret } }
      );

      setNewKey('');
      setNewValue('');
      await fetchRecords();
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.message || 'Failed to add record');
    } finally {
      setLoading(false);
    }
  };

  const updateRecord = async (key: string, value: string) => {
    if (!secret) return;

    setLoading(true);
    setError('');

    try {
      let parsedValue: string | number | boolean | object | null;
      try {
        parsedValue = JSON.parse(value);
      } catch {
        parsedValue = value;
      }

      await axios.post(
        API_BASE,
        { [key]: parsedValue },
        { params: { secret } }
      );

      setEditingKey(null);
      await fetchRecords();
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.message || 'Failed to update record');
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (key: string) => {
    if (!secret) return;

    setLoading(true);
    setError('');

    try {
      await axios.delete(API_BASE, {
        params: { secret, key },
      });
      await fetchRecords();
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.message || 'Failed to delete record');
    } finally {
      setLoading(false);
    }
  };

  const clearAllRecords = async () => {
    if (!secret || !confirm('Are you sure you want to delete all records?')) return;

    setLoading(true);
    setError('');

    try {
      await axios.delete(API_BASE, {
        params: { secret },
      });
      await fetchRecords();
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.message || 'Failed to clear records');
    } finally {
      setLoading(false);
    }
  };

  const formatValue = (value: string | number | boolean | object | null) => {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  useEffect(() => {
    if (secret) {
      fetchRecords();
    }
  }, [secret, fetchRecords]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Database className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Simple Rest Store
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A simple interface for store.zapier.com - manage your key-value storage with ease
          </p>
        </div>

        {/* Secret Input */}
        <div className="max-w-md mx-auto mb-8">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Key className="inline h-4 w-4 mr-1" />
            Secret Key
          </label>
          <div className="relative">
            <input
              type={showSecret ? 'text' : 'password'}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter your storage secret"
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <button
            onClick={fetchRecords}
            disabled={!secret || loading}
            className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Loading...' : 'Connect & Load Records'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-4xl mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Add New Record */}
        {secret && (
          <div className="max-w-4xl mx-auto mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Key
                </label>
                <input
                  type="text"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  placeholder="Enter key name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Value (JSON or string)
                </label>
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="Enter value"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <button
              onClick={addRecord}
              disabled={!newKey || !newValue || loading}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Add Record
            </button>
          </div>
        )}

        {/* Records Display */}
        {secret && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Stored Records ({Object.keys(records).length})
              </h2>
              {Object.keys(records).length > 0 && (
                <button
                  onClick={clearAllRecords}
                  className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
              )}
            </div>

            {Object.keys(records).length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No records found</p>
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(records).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white mb-2">
                          {key}
                        </div>
                        {editingKey === key ? (
                          <div className="space-y-2">
                            <textarea
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white font-mono text-sm"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => updateRecord(key, editingValue)}
                                className="text-green-600 hover:text-green-700 flex items-center gap-1"
                              >
                                <Save className="h-4 w-4" />
                                Save
                              </button>
                              <button
                                onClick={() => setEditingKey(null)}
                                className="text-gray-600 hover:text-gray-700 flex items-center gap-1"
                              >
                                <X className="h-4 w-4" />
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <pre className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded overflow-x-auto">
                            {formatValue(value)}
                          </pre>
                        )}
                      </div>
                      {editingKey !== key && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingKey(key);
                              setEditingValue(formatValue(value));
                            }}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteRecord(key)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
          <p>
            Powered by{' '}
            <a
              href="https://store.zapier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              store.zapier.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
