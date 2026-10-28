# `dataDatabricksAgentKitManagedMemoryStores` Submodule <a name="`dataDatabricksAgentKitManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores databricks_agent_kit_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores(scope: Construct, id: string, config?: DataDatabricksAgentKitManagedMemoryStoresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig">DataDatabricksAgentKitManagedMemoryStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig">DataDatabricksAgentKitManagedMemoryStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAgentKitManagedMemoryStoresProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAgentKitManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores">managedMemoryStores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `managedMemoryStores`<sup>Required</sup> <a name="managedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores"></a>

```typescript
public readonly managedMemoryStores: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAgentKitManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryStoresConfig <a name="DataDatabricksAgentKitManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryStoresConfig: dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryStoresProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores: dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig: dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend: dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend = { ... }
```


### DataDatabricksAgentKitManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryStoresProviderConfig: dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get"></a>

```typescript
public get(index: number): DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>[]

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">creatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">ownerUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">storageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorUserId`<sup>Required</sup> <a name="creatorUserId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```typescript
public readonly creatorUserId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ownerUserId`<sup>Required</sup> <a name="ownerUserId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```typescript
public readonly ownerUserId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `storageBackend`<sup>Required</sup> <a name="storageBackend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```typescript
public readonly storageBackend: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">backendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendId`<sup>Required</sup> <a name="backendId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```typescript
public readonly backendId: string;
```

- *Type:* string

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryStores } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryStoresProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---



