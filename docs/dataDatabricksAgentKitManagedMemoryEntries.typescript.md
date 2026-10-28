# `dataDatabricksAgentKitManagedMemoryEntries` Submodule <a name="`dataDatabricksAgentKitManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries databricks_agent_kit_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries(scope: Construct, id: string, config: DataDatabricksAgentKitManagedMemoryEntriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig">DataDatabricksAgentKitManagedMemoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig">DataDatabricksAgentKitManagedMemoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAgentKitManagedMemoryEntriesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAgentKitManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries">managedMemoryEntries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput">actorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `managedMemoryEntries`<sup>Required</sup> <a name="managedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries"></a>

```typescript
public readonly managedMemoryEntries: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryEntriesConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryEntriesConfig: dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId">actorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId">sessionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryEntriesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries: dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig: dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

const dataDatabricksAgentKitManagedMemoryEntriesProviderConfig: dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```typescript
public get(index: number): DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>[]

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">actorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```typescript
public readonly actorId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---


### DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAgentKitManagedMemoryEntries } from '@cdktn/provider-databricks'

new dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---



