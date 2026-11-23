# `dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups databricks_assume_group_restricted_sharing_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups(scope: Construct, id: string, config?: DataDatabricksAssumeGroupRestrictedSharingGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups">restrictedSharingGroups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `restrictedSharingGroups`<sup>Required</sup> <a name="restrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups"></a>

```typescript
public readonly restrictedSharingGroups: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupsConfig: dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig: dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups: dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

const dataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig: dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get"></a>

```typescript
public get(index: number): DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>[]

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId"></a>

```typescript
public readonly restrictedSharingGroupId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAssumeGroupRestrictedSharingGroups } from '@cdktn/provider-databricks'

new dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---



