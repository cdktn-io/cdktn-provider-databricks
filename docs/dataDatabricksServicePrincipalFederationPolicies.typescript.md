# `dataDatabricksServicePrincipalFederationPolicies` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicies` Submodule" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicies <a name="DataDatabricksServicePrincipalFederationPolicies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies databricks_service_principal_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies(scope: Construct, id: string, config: DataDatabricksServicePrincipalFederationPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig">DataDatabricksServicePrincipalFederationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig">DataDatabricksServicePrincipalFederationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipalFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatabricksServicePrincipalFederationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: number;
```

- *Type:* number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPoliciesConfig <a name="DataDatabricksServicePrincipalFederationPoliciesConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalFederationPoliciesConfig: dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#page_size DataDatabricksServicePrincipalFederationPolicies#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#page_size DataDatabricksServicePrincipalFederationPolicies#page_size}.

---

### DataDatabricksServicePrincipalFederationPoliciesPolicies <a name="DataDatabricksServicePrincipalFederationPoliciesPolicies" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalFederationPoliciesPolicies: dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}.

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

const dataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy: dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPoliciesPoliciesList <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesList" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksServicePrincipalFederationPoliciesPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>[]

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim"></a>

```typescript
public resetSubjectClaim(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```typescript
public readonly subjectClaimInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicies } from '@cdktn/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: number;
```

- *Type:* number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksServicePrincipalFederationPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>

---



