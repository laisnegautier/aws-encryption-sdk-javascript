/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

export * from './browser_cryptographic_materials_manager'
export * from './material_helpers'
export * from './bytes2_jwk'
export * from './keyring_helpers'
export {
  WebCryptoDecryptionMaterial, WebCryptoEncryptionMaterial, WebCryptoAlgorithmSuite,
  AlgorithmSuiteIdentifier, EncryptionContext, EncryptedDataKey, KeyringWebCrypto,
  KeyringTrace, KeyringTraceFlag, needs, MixedBackendCryptoKey, MultiKeyringWebCrypto,
  immutableBaseClass, immutableClass, frozenClass, readOnlyProperty, keyUsageForMaterial,
  isValidCryptoKey, isCryptoKey
} from '@aws-crypto/material-management'