# `dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule <a name="`dataDatabricksWorkspaceIamServicePrincipalsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2 <a name="DataDatabricksWorkspaceIamServicePrincipalsV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2 databricks_workspace_iam_service_principals_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2(scope: Construct, id: string, config?: DataDatabricksWorkspaceIamServicePrincipalsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config">DataDatabricksWorkspaceIamServicePrincipalsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceIamServicePrincipalsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceIamServicePrincipalsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamServicePrincipalsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals">servicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference</a>

---

##### `servicePrincipals`<sup>Required</sup> <a name="servicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.servicePrincipals"></a>

```typescript
public readonly servicePrincipals: DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2Config <a name="DataDatabricksWorkspaceIamServicePrincipalsV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamServicePrincipalsV2Config: dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#filter DataDatabricksWorkspaceIamServicePrincipalsV2#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#page_size DataDatabricksWorkspaceIamServicePrincipalsV2#page_size}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2Config.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig: dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals: dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}. |

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#service_principal_id DataDatabricksWorkspaceIamServicePrincipalsV2#service_principal_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#provider_config DataDatabricksWorkspaceIamServicePrincipalsV2#provider_config}.

---

### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

const dataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig: dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_service_principals_v2#workspace_id DataDatabricksWorkspaceIamServicePrincipalsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ProviderConfig</a>

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get"></a>

```typescript
public get(index: number): DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>[]

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus">accountSpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountSpStatus`<sup>Required</sup> <a name="accountSpStatus" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus"></a>

```typescript
public readonly accountSpStatus: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipals</a>

---


### DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksWorkspaceIamServicePrincipalsV2 } from '@cdktn/provider-databricks'

new dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamServicePrincipalsV2.DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig">DataDatabricksWorkspaceIamServicePrincipalsV2ServicePrincipalsProviderConfig</a>

---



